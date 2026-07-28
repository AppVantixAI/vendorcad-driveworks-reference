export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-6 h-6 hidden min-w-6 mb-[0.075rem] overflow-hidden text-2xl leading-[2.125rem]" viewBox="0 0 24 24" fill="currentColor" data-cid={cid}>
      <path fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
