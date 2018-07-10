<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'content', 'image', 'category_id','user_id','view_counts'
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
