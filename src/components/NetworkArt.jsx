
"use client";

export default function NetworkArt() {
  const nodes = [
    { x: 50, y: 12 },
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 12, y: 48 },
    { x: 38, y: 45 },
    { x: 63, y: 45 },
    { x: 88, y: 48 },
    { x: 25, y: 70 },
    { x: 50, y: 62 },
    { x: 75, y: 70 },
    { x: 38, y: 88 },
    { x: 63, y: 88 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 5],
    [2, 6], [3, 7], [4, 7], [4, 8], [5, 8],
    [5, 9], [6, 9], [7, 10], [8, 10], [8, 11],
    [9, 11], [1, 5], [4, 5], [7, 8], [8, 9],
  ];

  return (
    <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#080d1b] p-6 md:min-h-[580px]">
      <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-violet-600/20 blur-[80px]" />

      <div className="relative z-10 w-full max-w-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-500/10 text-2xl text-blue-300 shadow-lg shadow-blue-500/10">
            ✳
          </div>

          <h2 className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
            AI Labs
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Connect. Create. Innovate.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[390px]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {connections.map(([start, end], index) => (
              <line
                key={index}
                x1={nodes[start].x}
                y1={nodes[start].y}
                x2={nodes[end].x}
                y2={nodes[end].y}
                stroke="#647cf8"
                strokeWidth="0.35"
                strokeOpacity="0.65"
              />
            ))}

            {nodes.map((node, index) => (
              <g key={index}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2.5"
                  fill="#101b3b"
                  stroke="#8da4ff"
                  strokeWidth="0.6"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="0.9"
                  fill="#c4d2ff"
                />
              </g>
            ))}

            <circle
              cx="50"
              cy="50"
              r="11"
              fill="#243b86"
              fillOpacity="0.35"
              stroke="#7c91ff"
              strokeWidth="0.6"
            />

            <circle
              cx="50"
              cy="50"
              r="6"
              fill="#627dff"
              fillOpacity="0.8"
            />

            <circle cx="50" cy="50" r="2.5" fill="white" />
          </svg>

          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-slate-300 backdrop-blur">
            INTELLIGENCE NETWORK
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["AI Powered", "Secure Access", "Smart Systems"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
