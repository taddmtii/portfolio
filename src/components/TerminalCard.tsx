export function TerminalCard() {
  return (
    <>
      <div className="mockup-code bg-primary text-primary-content w-full h-95 max-w-xl">
        <pre data-prefix="$">
          <code>name</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Tadd Trumbull II</code>
        </pre>
        <pre data-prefix="$">
          <code>pwd</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>chattanooga, tn</code>
        </pre>
        <pre data-prefix="$">
          <code>cat contact.json</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>taddtrumbullii@gmail.com</code>
        </pre>
        <pre data-prefix="$">
          <code>ls skills/</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>React TypeScript Next.js NestJS Python</code>
        </pre>
        <pre data-prefix="$">
          <code>whoami --verbose</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Full-stack developer | Coffee enthusiast</code>
        </pre>
        <pre data-prefix="$">
          <code>status</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>building: <a href="https://github.com/taddmtii/Cadence" target="_blank">Cadence</a></code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>learning: NestJS + Prisma</code>
        </pre>
        <pre data-prefix="$">
          <code>cat coffee.log</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>cups of coffee today: 3</code>
        </pre>
      </div>
    </>
  );
}
