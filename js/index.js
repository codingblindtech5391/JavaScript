/*
 ****  Out put some new elements to the DOM ****
 */

function OutputNew() {
    const Children = [{
        id: 1,
        item: 'Child two'
    }, {
        id: 2,
        item: 'Child Three'
    }];

    Children.forEach((child, num) => {
        // create container using id of item
        CreateElement('div', '.container', 'append', attributes = [{
            'name': 'id',
            'value': `MyId${num}`
        }]);

        // insert the name into div 
        CreateElement('div', `#MyId${num}`, 'append', attributes = [{
            'name': 'html',
            'value': child.item
        }]);
    });
}

OutputNew();