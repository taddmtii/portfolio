export function TerminalCard() {
  return (
    <>
      <div className="mockup-code bg-[#252525] text-primary-content w-full h-70 max-w-xl">
        <pre data-prefix="$">
          <code>name</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>Tadd Trumbull II</code>
        </pre>
        <pre data-prefix="$">
          <code>pwd</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>chattanooga, tn</code>
        </pre>
        <pre data-prefix="$">
          <code>cat contact.json</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>taddtrumbullii@gmail.com</code>
        </pre>
        <pre data-prefix="$">
          <code>ls skills/</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>React TypeScript Next.js NestJS Python</code>
        </pre>
        <pre data-prefix="$">
          <code>whoami --verbose</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>Full-stack developer | Coffee enthusiast</code>
        </pre>
      </div>
    </>
  );
}
