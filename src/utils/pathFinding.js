export const bfs = (grid, start, end) => {
  const queue = [start];
  const visited = new Set();
  const paths = { [`${start[0]}-${start[1]}`]: null };

  while (queue.length) {
      const [row, col] = queue.shift();

      // Check if the end point is reached
      if (row === end[0] && col === end[1]) {
          return buildPath(paths, start, end);
      }

      visited.add(`${row}-${col}`);

      // Define potential neighbors
      const neighbors = [
          [row - 1, col],
          [row + 1, col], 
          [row, col - 1], 
          [row, col + 1], 
      ];

      for (const [newRow, newCol] of neighbors) {
          const isInBounds = newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length;
          const isNotVisited = !visited.has(`${newRow}-${newCol}`);

          if (isInBounds && isNotVisited) {
              queue.push([newRow, newCol]);
              paths[`${newRow}-${newCol}`] = [row, col]; 
          }
      }
  }
  return []; 
};

export const dfs = (grid, start, end) => {
  const stack = [start];
  const visited = new Set();
  const paths = { [`${start[0]}-${start[1]}`]: null };

  while (stack.length) {
      const [row, col] = stack.pop();

      // Check if the end point is reached
      if (row === end[0] && col === end[1]) {
          return buildPath(paths, start, end);
      }

      // Mark the current cell as visited
      visited.add(`${row}-${col}`);

      const neighbors = [
          [row - 1, col],
          [row + 1, col],
          [row, col - 1],
          [row, col + 1], 
      ];

      for (const [newRow, newCol] of neighbors) {
          const isInBounds = newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length;
          const isNotVisited = !visited.has(`${newRow}-${newCol}`);

          if (isInBounds && isNotVisited) {
              stack.push([newRow, newCol]);
              paths[`${newRow}-${newCol}`] = [row, col]; 
          }
      }
  }
  return []; 
};

const buildPath = (paths, start, end) => {
  const path = [];
  let current = end;

  while (current) {
      path.push(current);
      // Move backwards through the path
      current = paths[`${current[0]}-${current[1]}`]; 
  }

  // Reverse to get the path from start to end
  return path.reverse();
};
