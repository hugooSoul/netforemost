require 'uri'
require 'net/http'


class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show update destroy ]

  # GET /articles
  def index
    @articles = Article.order(created_at: :desc)

    if @articles.empty?
      info = retrieve_articles
      articles = populate_articles(info)
      render json: info
    else
      render json: @articles
    end
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.new(article_params)
    
    if @article.save
      render json: @article, status: :created#, location: api_v1_article_url(@article)
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:author, :title, :description, :url, :url_to_image, :published_at, :content)
    end

    def retrieve_articles
      url = 'https://newsapi.org/v2/top-headlines?'\
      'page=1&'\
      'category=sports&'\
      "apiKey=#{ENV['NEWS_API_KEY']}"

      uri = URI(url)
      Net::HTTP.get(uri)
    end

    def populate_articles(json)
      info = JSON.parse(json)
      articles = info['articles']
      articles.each do |article|
        Article.create!(
          author: article['autor'], 
          title: article['title'],
          description: article['description'],
          url: article['url'], 
          url_to_image: article['urlToImage'],
          published_at: article['publishedAt'],
          content: article['content']
        )
      end
    end
end
