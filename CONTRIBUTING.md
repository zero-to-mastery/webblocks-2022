<a href="https://storz-test.pages.dev/" target="_blank">
    <img src="https://user-images.githubusercontent.com/63467479/190611518-b60d57af-711b-4b8b-9de5-eb2d51ddcb59.png" alt="Project Banner">
</a>

# Welcome to Hacktoberfest

Hello coders! We welcome everyone to join our quest and contribute to this project. Also make sure to check out the [README](https://github.com/zero-to-mastery/webblocks-2022/blob/master/README.md) to get a better understanding of this repo.

# What is Hacktoberfest?

Hacktoberfest is for everyone. It is a month-long celebration from October 1st - 31st sponsored by [Digital Ocean](https://hacktoberfest.digitalocean.com/) and [GitHub](https://github.com/blog/2433-celebrate-open-source-this-october-with-hacktoberfest) to get people involved in [Open Source](https://github.com/open-source). Create your very first pull request to any public repository on GitHub and contribute to the open source developer community.

## 1. Register for the Hacktoberfest

<https://hacktoberfest.digitalocean.com/>

## 2. How to contribute

0. Start chatting with other ZTM students in the #hacktoberfest-2022 channel on our Discord to get help, work together, and share your contributions!

1. First up you need to fork (make a copy) of this repo to your Github account.

2. Clone (download) your fork to your computer

3. Set your streams so you can sync your clone with the original repo (get the latest updates)

```sh
git remote add upstream https://github.com/zero-to-mastery/webblocks-2022.git
```

```sh
git pull upstream master
```

4. The above 2 commands will synchronize your forked version of the project with the actual repository.

5. Create a branch

6. In the blocks directory (folder), create a directory named after yourself.

7. Within this folder you just made, create three files, an HTML file, a CSS file, and a JS file.

8. Link your CSS and JS files to your HTML file.

9. Create a web component! It can be as simple or as complex as you like!

10. Grab a screenshot or gif of your final Web Block, ensuring that its nicely crop and preferably squared. Save this in your directory using icon.png as the name. If you don't add a gif/screenshot, the website won't show your work in the thumbnail.

11. Next, create another file in your directory named meta.json, using the following template ensuring you replace the values for your own. This information will be used to automatically add your Web Block to the gallery once your PR is merged.

```json
{
  "block_name": "ZTM Button",
  "author_name": "Matt",
  "author_github_url": "https://github.com/MattCSmith/"
}
```

12. Please keep src/blocks.js as it is. If you follow step 10 above, a script will add your art automatically after your PR is merged.

13. Pull from the upstream again, like we did in step 3. This is to ensure we still have the latest code.

```sh
git pull upstream master
```

14. Commit and push the code to your fork

15. Create a pull request to have the changes merged from your fork into the origin

16. Tweet about making your first Hacktoberfest pull request!

Congratulations! You are now one pull request closer to getting that free t-shirt. Repeat these steps until you have made at least 4 qualifying pull requests. You can check how many qualifying pull requests you have made at https://hacktoberfest.digitalocean.com/profile Have Fun and Happy Coding!

All discussions around this event can now be had in our dedicated Hacktoberfest channels on Discord!
