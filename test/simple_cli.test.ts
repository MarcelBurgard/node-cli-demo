import { simpleParser } from "../src/simple_cli";

describe("simple cli", () => {
  it("should echo given string", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const toBeEchoed = "test";

    await simpleParser.parse(`-i ${toBeEchoed}`);

    expect(consoleSpy).toHaveBeenCalledWith(toBeEchoed);
  });

  it("should echo hello world on default", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    await simpleParser.parse("");

    expect(consoleSpy).toHaveBeenCalledWith("Hello world!");
  });
});
