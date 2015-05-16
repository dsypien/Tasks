describe('Projects Page e2e test', function() {
	var projectNameElem = element(by.model('project.name')),
    	addBtnElem = element.all(by.id('addBtn'));

    beforeEach(function(){
    	browser.get('http://localhost:9000/#/projects'); 
    });

    function addProject(){
    	expect(element.all(by.repeater('project in projects')).count()).toEqual(0);
    	projectNameElem.sendKeys("Test project");
    	addBtnElem.click();
    }

    it('can add a project', function() {
    	//Act
    	addProject();
    	
    	//Assert
    	expect(element.all(by.repeater('project in projects')).count()).toEqual(1);
    });

    it('change page and current url', function() {
    	// Arrange
    	addProject();
    	
    	// Act
    	element.all(by.css('.project-container')).first().click();

    	
    	// Assert
    	expect(browser.getLocationAbsUrl()).toEqual('/project/0');
    });
});