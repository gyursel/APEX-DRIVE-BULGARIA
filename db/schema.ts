import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const cmsState=sqliteTable('cms_state',{id:text('id').primaryKey(),draft:text('draft').notNull(),published:text('published').notNull(),version:integer('version').notNull().default(0),publishedVersion:integer('published_version').notNull().default(0),updatedAt:text('updated_at').notNull(),updatedBy:text('updated_by').notNull()});
export const cmsRevisions=sqliteTable('cms_revisions',{version:integer('version').primaryKey(),content:text('content').notNull(),createdAt:text('created_at').notNull(),createdBy:text('created_by').notNull()});
export const cmsOwners=sqliteTable('cms_owners',{slot:text('slot').primaryKey(),userId:text('user_id').notNull()});
export const cmsMedia=sqliteTable('cms_media',{id:text('id').primaryKey(),name:text('name').notNull(),mime:text('mime').notNull(),size:integer('size').notNull(),createdAt:text('created_at').notNull()});
