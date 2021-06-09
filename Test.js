/**
 * Класс для работы с API
 *
 * @author		Igor Norman 
 * @version		v.1.0 (06/06/2021)
 */
class Api_path_templates =
{
	constructor() 
    {

    }


	/**
	 * Заполняет строковый шаблон template данными из объекта object
	 *
	 * @author		Igor Norman 
	 * @version		v.1.0 (06/06/2021)
	 * @param		{object} object
	 * @param		{string} template
	 * @return		{string}
	 */
	get_api_path(object, template)
	{
		let result = '';

		 const replaced = api_path_templates.map((item) => {
          return item.replace(/%(\w+)%/g, (_, str) => {
            if (user[str]) {
              return encodeURIComponent(user[str]);
            } else {
              return str;
            }
          });
        });
    
        console.log(replaced);

		return result;
	}
}


let user =
{
	id		: 20,
	name	: 'John Dow',
	role	: 'QA',
	salary	: 100
};

let api_path_templates =
[
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) =>
{
	return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = 
[
	"/api/items/20/John%20Dow",
	"/api/items/20/QA",
	"/api/items/20/100"
];
