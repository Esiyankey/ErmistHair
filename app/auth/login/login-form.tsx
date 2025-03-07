"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
    setIsLoading(true);
    try {
      const fetchResponse = await fetch(
        "http://localhost:3030/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.getValues()),
        }
      );
      const data = await fetchResponse.json();

      console.log("Full response:", data);
      console.log("User object:", data.user);
      console.log("User role:", data.user?.role);
      console.log("Token:", data.token);

      if (!fetchResponse.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (fetchResponse.ok) {
        // Save token
        localStorage.setItem("token", data.token);

        console.log(data.user?.role);
        // Redirect based on user role
        if (data.user?.role === "admin") {
          router.push("/admin");
          router.refresh();
        }
      } else {
        alert(data.message);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Account created successfully",
        description: "You can now log in with your new account.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive", // Assuming your toast supports error styling
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <h5>Email</h5>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <h5>Password</h5>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
