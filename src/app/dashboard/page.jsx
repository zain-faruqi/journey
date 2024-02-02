import { getXataClient } from '../../xata'
import React from 'react'
import EntryForm from './EntryForm';
import { revalidatePath } from 'next/cache';
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/dist/server/api-utils';


export default async function page() {
    const {userId} = auth();
    const xataClient = getXataClient();
    if (!userId) {
        redirect('/');
    }
    const entries = await xataClient.db.entries.filter({userId}).getMany();
    async function createEntry(formData) {
        'use server';
        const name = formData.get('name');
        if (!name) { return };

        const newEntry = { name, userId };
        if (!userId) {
            return;
        }
        const xata = getXataClient();
        await xata.db.entries.create(newEntry);
        revalidatePath('/');
    }

  return (
      <div>
          <h1 className="mb-4">Dashboard</h1>
          <EntryForm handleCreateEntry={createEntry} />
          <div className="mb-1"></div>
          {entries.map((entry) => (
              <p  key={entry.id}>{entry.name}</p>
          ))}
      </div>
  )
}
