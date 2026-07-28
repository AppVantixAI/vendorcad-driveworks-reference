export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-6 block min-w-6 mb-[0.075rem] overflow-hidden text-2xl leading-[2.125rem]" viewBox="0 0 24 24" fill="currentColor" data-cid={cid}>
      <path fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}
