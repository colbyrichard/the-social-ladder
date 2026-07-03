const BENCHMARKS = [
  { stat: "64%", body: "of marketers say short-form video drives the highest ROI of any content format", source: "HubSpot, State of Marketing 2024" },
  { stat: "5.5%", body: "average engagement rate on TikTok, the highest of any major platform", source: "Socialinsider, Social Media Benchmarks 2024" },
  { stat: "0.60%", body: "typical organic engagement rate on a B2C Instagram post", source: "Rival IQ, 2024 Benchmark Report" },
  { stat: "90%", body: "of TikTok users open the app at least once every day", source: "TikTok / Kantar" },
  { stat: "82%", body: "of consumers say user-generated content sways a purchase decision", source: "Sprout Social Index, 2024" },
  { stat: "71%", body: "of consumers are more likely to buy after a social media referral", source: "HubSpot Research" },
];

function TickerItem({ stat, body, source }: (typeof BENCHMARKS)[number]) {
  return (
    <div className="flex shrink-0 items-baseline gap-4 px-8">
      <span className="font-mono text-2xl font-medium text-accent">{stat}</span>
      <span className="max-w-xs text-sm leading-snug text-ink-muted">
        {body}
        <span className="ml-2 text-xs text-ink-faint">— {source}</span>
      </span>
    </div>
  );
}

export function DataStrip() {
  return (
    <section
      aria-label="Real social media marketing benchmarks"
      className="overflow-hidden border-b border-line bg-surface py-6"
    >
      <div className="flex w-max ticker-track">
        {[...BENCHMARKS, ...BENCHMARKS].map((item, i) => (
          <TickerItem key={`${item.stat}-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
}
