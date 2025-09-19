import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Patient Registration</h1>
        <p className="mt-2 text-muted-foreground">Register your interest for Panchakarma therapy. Our team will reach out to schedule an assessment.</p>
        <form
          className="mt-8 grid gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required placeholder="Your full name" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Mobile</Label>
              <Input id="phone" name="phone" required placeholder="+91-" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="goals">Your goals / concerns</Label>
            <Textarea id="goals" name="goals" placeholder="Briefly describe your health goals or concerns" rows={4} />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">Submit</Button>
            {submitted && (
              <span className="text-sm text-green-700 dark:text-green-400">Thanks! We will contact you soon.</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
