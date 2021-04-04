// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

export interface Project {

	ProjectID: string;
	Name: string;

	Description: string;

	Tags: string[];

	Language: "";
	LanguageLink: string;

	Hosted: "github" | "gitlab";
	HostedLink: string;

}
