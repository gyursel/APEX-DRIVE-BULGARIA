CREATE TABLE `cms_media` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cms_owners` (
	`slot` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cms_revisions` (
	`version` integer PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`created_at` text NOT NULL,
	`created_by` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cms_state` (
	`id` text PRIMARY KEY NOT NULL,
	`draft` text NOT NULL,
	`published` text NOT NULL,
	`version` integer DEFAULT 0 NOT NULL,
	`published_version` integer DEFAULT 0 NOT NULL,
	`updated_at` text NOT NULL,
	`updated_by` text NOT NULL
);
