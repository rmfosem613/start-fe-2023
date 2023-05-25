/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
import playwright from "playwright";
import fs from "fs";

(async () => {
  // let rank = 0;

  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.melon.com/chart/");

  // 모든 .wrap_song_info 요소를 가져옵니다.
  const linkTexts = await page.evaluate((rank) => {
    return Array.from(document.querySelectorAll(".rank01")).map((link) => {
      const title = link.querySelector("span")?.innerText;

      // eslint-disable-next-line no-param-reassign
      rank += 1;
      return { rank, title };
    });
  }, 0);

  // 추가적으로 .rank02 요소의 span 값을 가져와서 linkTexts 배열에 추가합니다.
  // const rank02Elements = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll(".rank02")).map((span) => {
  //     const singer = span.querySelector("span")?.innerText;

  //     return { singer };
  //   });
  // });
  // console.log(rank02Elements);

  // rank02Elements.forEach((entry, index) => {
  //   const { singer } = entry;
  //   const rank = index; // rank 값을 index로 설정
  //   linkTexts.splice(rank, 0, { rank, singer }); // 해당 위치에 { rank, singer } 객체를 삽입
  // });
  // console.log(linkTexts.length);

  // linkText를 JSON 파일로 저장합니다.
  const jsonData = JSON.stringify(linkTexts, null, 2);
  fs.writeFileSync("linkTexts.json", jsonData);

  await browser.close();
})();
