"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");
      const type = searchParams.get("type");

      if (!token || type !== "email") {
        setVerificationStatus("error");
        setErrorMessage("Invalid verification link");
        return;
      }

      try {
        const supabase = createClient();
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: "email",
        });

        if (error) {
          setVerificationStatus("error");
          setErrorMessage(error.message);
        } else {
          setVerificationStatus("success");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setVerificationStatus("error");
        setErrorMessage("An error occurred during verification");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Xác minh email</CardTitle>
          <CardDescription>
            {verificationStatus === "loading"
              ? "Đang xác minh email của bạn..."
              : verificationStatus === "success"
              ? "Email của bạn đã được xác minh"
              : "Email verification failed"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {verificationStatus === "loading" && (
            <div className="flex justify-center py-4">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="text-center py-4">
              <p className="text-green-600">
                Email của bạn đã được xác minh thành công!
              </p>
              <p className="mt-2 text-gray-600">
                Bạn có thể truy cập tất cả các tính năng của tài khoản của mình.
              </p>
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="text-center py-4">
              <p className="text-red-600">Xác minh email thất bại</p>
              <p className="mt-2 text-gray-600">{errorMessage}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {verificationStatus !== "loading" && (
            <Link href={verificationStatus === "success" ? "/profile" : "/"}>
              <Button>
                {verificationStatus === "success"
                  ? "Đi đến trang cá nhân"
                  : "Đi đến trang chủ"}
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
