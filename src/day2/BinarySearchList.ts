export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const mid = low + Math.floor((high - low) / 2);
        if (haystack[mid] === needle) return true;
        else if (haystack[mid] > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);
    return false;
}
