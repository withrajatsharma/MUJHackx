"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const page = () => {
  const [adhaar, setAdhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [verified, setVerified] = useState(false);

  const adhaarVerify = (e) => {
    e.preventDefault();

    if (flag) {
      if (otp.length == 6) {
        setVerified(true);
        setFlag(false);
      }
    } else {
      if (adhaar.length == 12) {
        setFlag(true);
      } else {
        return;
      }
    }
  };

  return (
    <main className="h-screen w-full">

        <nav className="w-full flex px-8 py-7 justify-between items-center">
            <div className=" font-bold text-2xl text-[#282796]">
                MedAura
            </div>
            <div className="bg-[#282796] text-white rounded-md px-5 py-2">
                Logout
            </div>
        </nav>

      <div className="w-[80%] mx-auto">
        <div className="bg-[#282796] p-8  h-[200px] rounded-2xl relative">
          <div className="bg-gray-500 text-white flex justify-center items-center text-4xl rounded-full w-32 h-32 absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2">
            R
          </div>

          <div className=" text-white flex flex-col justify-between h-full">
            <h1 className="text-2xl font-bold ">Adam Green</h1>

            <div>
              <p>Neurologist</p>
              <p className="text-sm  opacity-60 pt-1">
                neurophysiologis MD PHD
              </p>
            </div>

            <p className="opacity-80">2002 - beginning the medical career</p>
          </div>
        </div>

        {verified ? (
          <>
            <div className=" h-full w-full bg-red-300"></div>
          </>
        ) : (
          <Card className=" w-[70%] mx-auto mt-10">
            <CardHeader className="text-lg">
              <CardTitle>Verify Adhaar</CardTitle>
              <CardDescription>
                Enter adhaar number to verify yourself
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={adhaarVerify}>
                <div className=" w-full flex justify-center  py-5 ">
                  <div className="flex flex-col gap-4">
                    {flag ? (
                      <>
                        <Label className=" text-nowrap" htmlFor="name">
                          Enter OTP{" "}
                        </Label>
                        <InputOTP
                          maxLength={6}
                          value={otp}
                          onChange={(value) => setOtp(value)}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Label className=" text-nowrap" htmlFor="name">
                          Adhaar No{" "}
                        </Label>
                        <InputOTP
                          maxLength={12}
                          value={adhaar}
                          onChange={(value) => setAdhaar(value)}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                            <InputOTPSlot index={6} />
                            <InputOTPSlot index={7} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={8} />
                            <InputOTPSlot index={9} />
                            <InputOTPSlot index={10} />
                            <InputOTPSlot index={11} />
                          </InputOTPGroup>
                        </InputOTP>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setFlag(false);
                  setAdhaar("");
                }}
              >
                Cancel
              </Button>
              <Button onClick={adhaarVerify}>Verify</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
};

export default page;
