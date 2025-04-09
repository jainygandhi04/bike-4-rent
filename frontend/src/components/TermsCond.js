import React from "react";

export default function TermsCond() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-[#3D2C1B] font-sans leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-[#B36D4E]">Terms & Conditions</h1>
      
      <p className="mb-4">
        Welcome to <strong>Bike4Rent</strong>. By using our platform, you agree to comply with the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. User Eligibility</h2>
      <p className="mb-4">
        Renters must be at least 18 years old and must have a valid driving license at the time of booking.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Vehicle Usage</h2>
      <p className="mb-4">
        All vehicles should be used responsibly. Any damage due to negligence will incur additional charges.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Bookings & Payments</h2>
      <p className="mb-4">
        Bookings are confirmed only after successful payment. Our system uses secure payment gateways to protect your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cancellation & Refund</h2>
      <p className="mb-4">
        Cancellations made at least 24 hours before the rental time are eligible for a full refund. No refunds for late cancellations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Privacy & Data</h2>
      <p className="mb-4">
        Your personal information is stored securely and will not be shared with any third parties without your consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Legal</h2>
      <p className="mb-4">
        Any misuse of the service or violation of terms may result in suspension of your account or legal action.
      </p>

      <p className="mt-10">
        By continuing to use our platform, you agree to abide by these terms and conditions.
      </p>
    </div>
  );
}
