import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl sm:text-7xl font-bold text-primary mb-2">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-soft-md hover:bg-primary/90 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
