
// object to set in orbit, position to orbit around
export function orbit(object, position) {
    const date = Date.now() * 0.001;
    const mathCos = Math.cos(date);
    const mathSin = Math.sin(date);

    object.position.set(
        position.x + mathCos * 1200,
        position.y + mathCos * 900,
        position.z + mathSin * 1200
    );
}