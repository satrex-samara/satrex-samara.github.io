export default function CurrentYear() {
  return <>{process.env.BUILD_YEAR ?? "2026"}</>;
}
