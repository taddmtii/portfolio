export function TerminalCard() {
    return (
        <>
            <div className="mockup-code -z-100 bg-primary text-primary-content w-lg">
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
                    <code>cat coffee.log</code>
                </pre>
                <pre data-prefix=">" className="text-success">
                    <code>cups of coffee today: 3</code>
                </pre>
            </div>
        </>
    );
}
