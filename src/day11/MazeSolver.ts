const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: Boolean[][],
    path: Point[],
): Boolean {
    // Base cases
    // 1. We're off the map
    if (
        curr.x < 0 ||
        curr.y < 0 ||
        curr.x > maze[0].length ||
        curr.y > maze.length
    ) {
        return false;
    }
    // 2. We've seen if before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3. It's a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 4. It's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // Recursive cases
    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Visit (Main Recursion)
    for (let i = 0; i < dir.length; ++i) {
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
            )
        ) {
            return true;
        }
    }

    // Post
    path.pop();
    return false;
}
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: Boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
