import { Type } from 'main.core';
import './tailwind.css';

export class Tailwind
{
	constructor(options = { name: 'Tailwind' })
	{
		this.name = options.name;
	}

	setName(name)
	{
		if (Type.isString(name))
		{
			this.name = name;
		}
	}

	getName()
	{
		return this.name;
	}
}