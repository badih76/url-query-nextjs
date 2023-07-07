import { NextResponse, NextRequest } from "next/server";

// impoer the items data from the data.json file
import data from './data.json';

export async function GET(request: NextRequest) {
    // it is a good practice to wrap our API code within try...catch for error handling
    try {
        // get the passed URL query param
        let searchId = request.nextUrl.searchParams.get('id');

        // if an item ID is passed, use that to return the corresponding item, 
        // otherwise, return the whole list
        let returnData = searchId ? data.filter(d => d.id == parseInt(searchId!)) : data;
        
        return NextResponse.json(returnData);    
    } catch (err) {
        console.log('ERROR: API - ', (err as Error).message);
        
        return NextResponse.json(err, { status: 200 });
    }
  }