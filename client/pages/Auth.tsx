import { Link } from "react-router-dom";

export default function Auth() {
  const handleGoogleLogin = () => {
    // This will be replaced with actual Google OAuth flow
    // For now, navigate to dashboard to simulate successful login
    // window.location.href = "/dashboard";
    window.location.href = "https://builderio-backend.onrender.com/auth/google";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-md">
        {/* Back to home link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 sm:mb-12"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        {/* Card */}
        <div className="bg-card rounded-2xl shadow-soft-lg p-8 sm:p-10">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
              <svg
                className="w-7 h-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Sign In to Continue
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            Use your Google account to log in and get your randomly assigned
            project. You can only assign a task once per workshop.
          </p>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full px-6 py-3.5 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-soft-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-3 mb-6"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Info section */}
          <div className="bg-secondary/50 rounded-lg p-4 sm:p-5 border border-border">
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground mb-1">
                  Why sign in with Google?
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Google authentication ensures secure, one-time task assignment
                  with verified student identities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-8 text-xs sm:text-sm text-muted-foreground">
          <p>
            By signing in, you agree to the workshop's terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
