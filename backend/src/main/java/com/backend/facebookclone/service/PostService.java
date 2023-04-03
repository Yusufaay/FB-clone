package com.backend.facebookclone.service;

import com.backend.facebookclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPosts();
}
