import { flatten } from "..";

describe("Flatten test", () => {
  it("should produce a flatted array with fixed input", async () => {
    // Arrange
    const toBeFlatted = [
      [1, 2],
      [1],
      1,
      5,
      6,
      [
        [
          [[4, 5, 6], 5],
          [9, 8, 11],
        ],
      ],
    ];

    // Act
    const output = flatten(toBeFlatted);

    // Assert
    expect(output).toHaveLength(13);
    expect(output).toEqual([1, 2, 1, 1, 5, 6, 4, 5, 6, 5, 9, 8, 11]);
  });

  it("should produce a flatted array with single input", async () => {
    // Arrange
    const toBeFlatted = [1];

    // Act
    const output = flatten(toBeFlatted);

    // Assert
    expect(output).toHaveLength(toBeFlatted.length);
    expect(output).toEqual(toBeFlatted);
  });

  it("should produce a flatted array with a deep nested input", async () => {
    // Arrange
    const toBeFlatted = [[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]]]]]]];

    // Act
    const output = flatten(toBeFlatted);

    // Assert
    expect(output).toHaveLength(1);
    expect(output).toEqual([1]);
  });

  it("should produce a flatted array with a mixed input", async () => {
    // Arrange
    const toBeFlatted = [1, "a", [2, 3], [[1, 2, 3], 4, [[[5]]]]];

    // Act
    const output = flatten(toBeFlatted);

    // Assert
    expect(output).toHaveLength(9);
    expect(output).toEqual([1, "a", 2, 3, 1, 2, 3, 4, 5]);
  });
});
