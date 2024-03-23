const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function () {
    test(`win cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      expect(game.determineWinner(`paper`, `rock`)).toBe(`win`);
      expect(game.determineWinner(`scissors`, `paper`)).toBe(`win`);
    });

    test(`tie cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);
    });

    test(`lost cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lost`);
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lost`);
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lost`);
    });
  });

  describe(`generateCPUResponse()`, function () {
    let mathRandomSpy;

    beforeEach(() => {
      mathRandomSpy = jest.spyOn(Math, `random`);
    });

    afterEach(() => {
      mathRandomSpy.mockRestore();
    });

    it(`Math.random = 0.1 -> Rock`, function () {
      mathRandomSpy.mockReturnValue(0.1);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`rock`);
    });

    it(`Math.random = 0.5 -> Paper`, function () {
      mathRandomSpy.mockReturnValue(0.5);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`paper`);
    });

    it(`Math.random = 0.9 -> Scissors`, function () {
      mathRandomSpy.mockReturnValue(0.9);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`scissors`);
    });
  });
});