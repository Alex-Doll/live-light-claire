Live Light with Claire
=============================


Contributing
--------------

### Dev Environment Setup
1. Clone the repository using the "Clone or download" link above
```
git clone [link]
```
2. Navigate into the repository
```
cd live-light-claire
```
3. Install the necessary dependencies
```
npm install
```
4. Start the local server
```
npm start
```
5. Start the webpack dev server in a separate terminal
```
npm run-script dev:wds
```
6. Navigate to the application in your web browser! [Localhost:8000](http://localhost:8000/)


### Adding New Code
1. In your terminal navigate to the repository
2. Checkout the master branch and make sure it's up to date
```
git checkout master && git pull
```
3. Create a new local branch from the updated master branch
```
git checkout -b new-feature-branch-name
```
4. Link the new local branch to the remote repository
```
git push -u origin new-feature-branch name
```
5. Add some code!
6. Commit the code
NOTE: Everytime you commit your code the script "npm test" will run and the commit will only happen if all tests pass.
7. Push new commits to your remote branch
NOTE: Everytime you push your code the script "npm test" will run and the push will only happen if all tests pass.
```
git push
```
8. Go to your branch on the repository's GitHub page and open a new pull request to the master branch!
9. Give yourself a round of applause!
