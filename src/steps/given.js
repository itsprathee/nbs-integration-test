import { Given } from 'cucumber';
import HomePage from '../page/home.page';

Given('I am on the home page', () => {
    HomePage.open("/");
});


