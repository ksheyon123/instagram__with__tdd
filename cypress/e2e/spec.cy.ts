describe("template spec", () => {
  // it("passes", () => {
  //   const username = "ksh1@c.com";
  //   const pw = "123qwe";
  //   cy.visit("https://rhino-organic-bison.ngrok-free.app/login");
  //   cy.get("input[name=username]").type(username);
  //   cy.get("input[name=password]").type(pw);
  //   // cy.get("#loginwithinstagram").click();
  //   let initialPosition;
  //   cy.get("#loginwithinstagram").then((button) => {
  //     initialPosition = button.position();
  //     console.log(initialPosition);
  //   });
  //   cy.get("body").click(800, 280);
  // });

  // it("go fb callback", () => {
  //   cy.visit(
  //     "https://rhino-organic-bison.ngrok-free.app/login/fb/callback?#access_token=EAAT7Me1T73ABOZCUNeMoi6Kxa4bAeeG7hOH84aAkMbCEUOtc7ZB3xfjVZCWkmBiKGCE57ZCjOVIkjPfBJ2FZAL1FnBhNZCZBRti08flMcxqIcAMnoVBwVnnZA7MKS6rFevvUEfN3KOMV7CZBoXfThg11tciz34rpLdcUoB4eLWSZBx5JlrZBGOv4JiuRTVryX30ugEeUeXXQrLPZAAlo82ttZBgYUArlEQkkZD&data_access_expiration_time=1719799969&expires_in=6431&long_lived_token=EAAT7Me1T73ABO5WA7j57f9UzC5IZAvi4lQG9w1I07ZCaIoIf9uClxtqCNcfx3UYrKOVJ4eKgJAaLLRZAQJsA5hpabPs2jNUJSjUDLl6ZCsGT8N2ZC3mhC9XmTwBU329q1zvQTMBmIT89MaunjLhsnWTHZArn1hUGyD5aUYVAUTCaubMKLyKv254F1a1MvmGZCCUNOwZD&state=1234"
  //   );
  // });

  it("on dashboard", () => {
    // cy.visit(
    //   "https://rhino-organic-bison.ngrok-free.app/login/fb/callback?#access_token=EAAT7Me1T73ABOZCUNeMoi6Kxa4bAeeG7hOH84aAkMbCEUOtc7ZB3xfjVZCWkmBiKGCE57ZCjOVIkjPfBJ2FZAL1FnBhNZCZBRti08flMcxqIcAMnoVBwVnnZA7MKS6rFevvUEfN3KOMV7CZBoXfThg11tciz34rpLdcUoB4eLWSZBx5JlrZBGOv4JiuRTVryX30ugEeUeXXQrLPZAAlo82ttZBgYUArlEQkkZD&data_access_expiration_time=1719799969&expires_in=6431&long_lived_token=EAAT7Me1T73ABO5WA7j57f9UzC5IZAvi4lQG9w1I07ZCaIoIf9uClxtqCNcfx3UYrKOVJ4eKgJAaLLRZAQJsA5hpabPs2jNUJSjUDLl6ZCsGT8N2ZC3mhC9XmTwBU329q1zvQTMBmIT89MaunjLhsnWTHZArn1hUGyD5aUYVAUTCaubMKLyKv254F1a1MvmGZCCUNOwZD&state=1234"
    // );
    cy.visit(
      "https://rhino-organic-bison.ngrok-free.app/dashboard?access_token=IGQWRPRnlkdlRaek9lT05BcFR4UG1XUWpoTV84c2x0RTlLSWlScFhtZAEYzaGE1T2VCdjZAtSGlSWjZAjWS1Pd3NLY3h2QXlEX3o3U2tsZAFFyTl9UY01IMGlBRmtlRVRmT202NXZAYdGt1SzBZAY3pVMU5yNW00SjFoVEpZAcTFXWHV2R3EzQQZDZD"
    );
    cy.wait(3000);
  });
});
