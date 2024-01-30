const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // up
    [0, 1], // down
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // A) Base Cases

    // 1. Off the map
    if (
        curr.x < 0 ||
        curr.x > maze[0].length ||
        curr.y < 0 ||
        curr.y > maze.length
    ) {
        return false;
    }

    // 2. It's a wall
    if (maze[curr.y][curr.x] === wall) return false;
    // 3. It's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }
    // 4. If we've seen it before > fill it with false first
    if (seen[curr.y][curr.x] === true) return false;

    // B) Recursive case (3 steps)
    // pre => push the point
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse (the visit)
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            ) === true
        ) {
            return true;
        }
    }
    // post => pop the point (if successful)
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
