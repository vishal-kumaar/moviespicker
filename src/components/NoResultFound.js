import React from 'react';

export default function NoResultFound({query, queryType}) {
  return (
    <div className="flex flex-col font-firasans py-16 items-center justify-center h-full">
      <h3 className="text-lg text-gray-600 mb-2">No {queryType} related to {query} were found!</h3>
      <p className="text-sm text-gray-400">Please try a different search query.</p>
    </div>
  );
};