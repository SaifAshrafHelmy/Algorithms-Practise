export default function two_crystal_balls(breaks: boolean[]): number {
    const n = breaks.length;
    const jump = Math.floor(Math.sqrt(n));

    for (let i = 0; i < n; i += jump) {
        console.log("start", i);
        if (breaks[i]) {
            for (let j = i - jump; j < n; j++) {
                if (breaks[j]) return j;
            }
        }
    }
    return -1;
}
