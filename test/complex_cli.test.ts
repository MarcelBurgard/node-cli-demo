import nock from "nock";
import { complexParser } from "../src/complex_cli";

describe("complex cli2", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should request a cat fact and log it to the console", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    nock("https://catfact.ninja")
      .get("/fact")
      .matchHeader("Content-Type", "application/json")
      .reply(200, {
        fact: "funny fact",
      });

    await complexParser.parse("cats");

    expect(consoleSpy).toHaveBeenCalledWith("funny fact");
  });

  it("should request an age prediction and log it to the console", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const name = "Jason";
    const expectedAge = 20;

    nock(`https://api.agify.io`)
      .get(`/?name=${name}`)
      .matchHeader("Content-Type", "application/json")
      .reply(200, {
        age: expectedAge,
      });

    await complexParser.parse(`age ${name}`);

    expect(consoleSpy).toHaveBeenCalledWith(
      `${name} has a predicted age of ${expectedAge}.`
    );
  });
});
