export default function two_crystal_balls(breaks: boolean[]): number {
    const n = breaks.length;
    const jump = Math.sqrt(n);

    for (let i = 0; i < n; i += jump) {
        if (breaks[i]) {
            for (let j = i - jump; j <= i; j++) {
                if (breaks[j]) return j;
            }
        }
    }
    return -1;
}
