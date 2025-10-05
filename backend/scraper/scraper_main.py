import asyncio
from playwright.async_api import async_playwright


async def scrape(page):
    prev_page_url = page.url
    await page.wait_for_selector(".article-list.uk-hidden\\@m .news-item a", timeout=10000, state="attached")
    news_links = await page.locator(".article-list.uk-hidden\\@m .news-item a").all()
    count = len(news_links)
    for i in range(count):
        await page.locator(".news-item a").nth(i).click()
        await page.wait_for_selector(".news-detail-title")

        title = (await page.locator(".news-detail-title").inner_text()).strip()

        paragraphs = await page.locator(".newscontbody p").all()
        content = ""
        for p in paragraphs:
            text = await p.inner_text()
            content += text.strip() + "\n"

        author = page.locator(
            "div.uk-flex.uk-flex-middle div.margin-left-10.margin-top-5 div")
        category = (await page.locator(".text-black.text-13.uk-text-mididle.margin-right-30").inner_text()).strip()
        published_at = (await page.locator(".text-gray.uk-text-middle.text-13").inner_text()).strip()

        print(title)

        await page.goto(prev_page_url, wait_until="load")


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        await page.goto("https://gogo.mn/", wait_until="domcontentloaded")

        print(await page.title())

        main_menu = page.locator("a.main-menu-link-item", has_text="Мэдээ")
        await main_menu.hover()

        await page.wait_for_selector("div.uk-width-medium", timeout=1000)
        categories = page.locator('ul.home-submenu-list li')

        for i in range(1):
            await categories.nth(i).locator('a').click()

            await page.wait_for_load_state('load')

            print(await page.title())
            await scrape(page)
            await page.go_back()
            main_menu = page.locator("a.main-menu-link-item", has_text="Мэдээ")
            await main_menu.hover()

            await page.wait_for_selector("div.uk-width-medium", timeout=1000)

        await browser.close()

asyncio.run(main())
