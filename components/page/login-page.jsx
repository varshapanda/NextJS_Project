import InputField from "../global/input-field";
import Button from "../global/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow rounded-xl p-8 w-full max-w-md">
        {/* Make heading dark */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign In</h2>

        <form className="flex flex-col gap-4">
          <InputField label="Email" type="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" placeholder="Enter your password" />
          <Button label="Sign In" type="submit" />
        </form>
      </div>
    </div>
  );
}
