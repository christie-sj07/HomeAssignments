//verifyPageTiltle.spec.ts
import test, { chromium, expect } from '@playwright/test'

test("Verify Page Title for Salesforce",async()=>{

    const browser=await chromium.launch({headless:false,channel:'chrome'})
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    const titleSalesforce=await page.title();
    console.log(titleSalesforce)
    expect(titleSalesforce).toMatch('Login | Salesforce')
    
})

test("Verify Page Title for Facebook",async()=>{

    const browser=await chromium.launch({headless:false,channel:'chrome'})
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("http://www.facebook.com/");
    const titleFacebook=await page.title();
    console.log(titleFacebook)
    expect(titleFacebook).toContain("Facebook – log in or sign up")
    



})

test("Verify Page Title for Amazon",async()=>{

    const browser=await chromium.launch({headless:false,channel:'chrome'})
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://www.amazon.in/")
    const titleAmazon=await page.title();
    console.log(titleAmazon)
    expect(titleAmazon).toStrictEqual("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")



})