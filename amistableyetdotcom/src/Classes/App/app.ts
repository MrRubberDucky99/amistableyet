import version from "../versionClass";
export class App {
	private OSTypeID: number[] = [];
	private OSMinVersion: version[] = [];
	private OSMaxVersion: version[] = [];
	private Name: string;
	private Icon: string;

	public constructor(
		name: string,
		icon: string,
		OSTypes: number[],
		OSMinVersion: version[],
		OSMaxVersion: version[]
	) {
		this.Name = name;
		this.Icon = icon;
		this.OSMinVersion = OSMinVersion;
		this.OSMaxVersion = OSMaxVersion;
		this.OSTypeID = OSTypes;
	}
}
