<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class CkeditorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     */

    public function upload(Request $request)
    {
        $CKEditorFuncNum = $request->input('CKEditorFuncNum');
        $originName = $request->file('upload')->getClientOriginalName();
        $fileName = pathinfo($originName, PATHINFO_FILENAME);

        $validator = Validator::make($request->all(),
            [
                'upload' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ],
            [
                'upload.image' => 'Изображение должно быть изображением.',
                'upload.mimes' => 'Изображение должно быть файлом одного из типов: :values.',
                'upload.max' => 'Изображение должно быть не больше :max.'
            ]);
        if ($validator->fails()) {
            $url = null;
            $msg = '';
            foreach ($validator->getMessageBag()->all() as $error) {
                $msg .= "* " . $error . "\\n";
            }
        } else {
            if ($request->hasFile('upload')) {
                $extension = $request->file('upload')->getClientOriginalExtension();
                $fileName = time() . '.' . $extension;
                $request->file('upload')->storeAs('uploads/images', $fileName);
                $url = asset('storage/uploads/images/' . $fileName);
                $msg = 'Изображение успешно загружено';

            }
        }
        $response = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";
        @header('Content-type: text/html; charset=utf-8');
        echo $response;
        exit();
    }
}

