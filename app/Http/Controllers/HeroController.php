<?php

namespace App\Http\Controllers;

use App\Hero;
use Illuminate\Http\Request;

class HeroController extends Controller
{
        public function index()
    {
        return Hero::all();
    }

    public function show(Hero $Hero)
    {
        return $Hero;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:products|max:255',
            'description' => 'required',
            'price' => 'integer',
            'availability' => 'boolean',
        ]);
            $product = Hero::create($request->all());

            return response()->json($product, 201);
    }

    public function update(Request $request, Hero $Hero)
    {
        $Hero->update($request->all());

        return response()->json($Hero, 200);
    }

    public function delete(Hero $Hero)
    {
        $Hero->delete();

        return response()->json(null, 204);
    }
}
