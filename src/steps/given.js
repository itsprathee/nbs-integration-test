import { Given } from 'cucumber';
import HomePage from '../page/home.page';

Given(/^I open the home page$/, function () {
    HomePage.open("/");
});


