import { useState } from "react";
import { Link } from "react-router-dom";

interface AssignmentState {
  isAssigned: boolean;
  selectedPool: number;
  assignedTaskId?: number;
}

export default function Dashboard() {
  const [state, setState] = useState<AssignmentState>({
    isAssigned: false,
    selectedPool: 5,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Mock user data - in production this would come from auth context
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
  };

  const handleAssignTask = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const taskId = Math.floor(Math.random() * state.selectedPool) + 1;
      setState({
        ...state,
        isAssigned: true,
        assignedTaskId: taskId,
      });
      setIsLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <div className="border-b border-border bg-card shadow-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Workshop Allocator</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Background accent elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Welcome Card */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-card rounded-2xl shadow-soft-lg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  Welcome, {user.name}
                </h2>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {!state.isAssigned ? (
          <>
            {/* Instructions Card */}
            <div className="mb-8 sm:mb-10">
              <div className="bg-secondary/30 border border-border rounded-xl p-6 sm:p-8">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                    i
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      How Task Assignment Works
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li className="flex gap-3 items-start">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span>
                          <strong>Random Assignment:</strong> Your project will be randomly selected from the pool you choose
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span>
                          <strong>Email Delivery:</strong> All project details will be sent to your email address
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span>
                          <strong>One-Time Only:</strong> You can only assign a task once. Choose carefully!
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Pool Selector */}
            <div className="mb-8 sm:mb-10">
              <div className="bg-card rounded-2xl shadow-soft-lg p-6 sm:p-8">
                <label className="block mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                    Select Task Pool
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={state.selectedPool}
                      onChange={(e) =>
                        setState({
                          ...state,
                          selectedPool: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex items-center gap-2 min-w-[80px] justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">
                        {state.selectedPool}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        projects
                      </span>
                    </div>
                  </div>
                </label>

                <p className="text-sm text-muted-foreground">
                  Choose the number of projects available in the pool. Your task will be randomly assigned from this pool.
                </p>
              </div>
            </div>

            {/* Assign Button */}
            <div className="flex justify-center">
              <button
                onClick={handleAssignTask}
                disabled={isLoading}
                className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-soft-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Assigning...
                  </>
                ) : (
                  <>
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Assign My Task
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="mb-8 sm:mb-12">
              <div className="bg-accent/5 border border-accent/30 rounded-2xl p-6 sm:p-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center animate-check-in">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Task Assigned!
                </h2>

                <p className="text-lg text-muted-foreground mb-6 sm:mb-8">
                  Your project has been sent to your email
                </p>

                <div className="inline-block bg-primary/10 text-primary rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium mb-8 sm:mb-10">
                  Project #{state.assignedTaskId} Selected
                </div>

                <p className="text-muted-foreground text-sm sm:text-base">
                  Check your email ({user.email}) for full project details and instructions.
                </p>
              </div>
            </div>

            {/* Locked State Card */}
            <div className="bg-card rounded-2xl shadow-soft-lg p-6 sm:p-8 border-2 border-muted">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    Task Already Assigned
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6">
                    Reassignment is not allowed. Each student can only receive one task assignment per workshop session.
                  </p>

                  <button
                    disabled
                    className="w-full sm:w-auto px-8 py-3 bg-muted text-muted-foreground rounded-lg font-semibold cursor-not-allowed opacity-50 transition-opacity duration-200"
                  >
                    Assign My Task
                  </button>
                </div>
              </div>
            </div>

            {/* Continue button */}
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
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
          </>
        )}
      </div>
    </div>
  );
}
