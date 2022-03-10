class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show
        post = Post.find_by(id:params[:id])
        if post
            render json: post
        else
            render json: {"error": "Post Not Found"}, status: :not_found
        end
    end

    def create
        post = Post.new(post_params)
        if post.save
            render json: post, status: :created
        else
            render json: {"error": post.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        post = Post.find_by(id:params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: {"error": "Post Not Found"}, status: :not_found
        end
    end

    def post_params
        params.permit(:content)
    end

end
